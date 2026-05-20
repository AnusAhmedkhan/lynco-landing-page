"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { LYN_WHATSAPP_CHAT_TIMING } from "@/constants/lyn-whatsapp-chat-animation";
import { useLynWhatsappChatMessages } from "@/hooks/use-lyn-landing";
import BotPhone from "@/public/assets/botPhone.png";

type VisibleMessage = {
  id: number;
  role: "user" | "bot";
  text: string;
  link?: string;
};

type LynWhatsappChatDemoProps = {
  alt: string;
  onStepComplete?: (step: number) => void;
  onConversationReset?: () => void;
};

function MessageBubble({ message }: { message: VisibleMessage }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`lyn-wa-bubble ${isUser ? "lyn-wa-bubble--user" : "lyn-wa-bubble--bot"}`}
    >
      <p className="leading-snug">
        {message.text}
        {message.link ? (
          <>
            {" "}
            <span className="lyn-wa-link break-all">{message.link}</span>
          </>
        ) : null}
      </p>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      className="lyn-wa-bubble lyn-wa-bubble--bot lyn-wa-typing"
      aria-hidden
    >
      <span className="lyn-wa-typing-dot" />
      <span className="lyn-wa-typing-dot" />
      <span className="lyn-wa-typing-dot" />
    </motion.div>
  );
}

export function LynWhatsappChatDemo({
  alt,
  onStepComplete,
  onConversationReset,
}: LynWhatsappChatDemoProps) {
  const messages = useLynWhatsappChatMessages();
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState<VisibleMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [index, setIndex] = useState(0);
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  const notifyStep = useCallback(
    (step?: number) => {
      if (step != null) onStepComplete?.(step);
    },
    [onStepComplete]
  );

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [visible, typing, prefersReducedMotion]);

  useEffect(() => {
    if (!isInView) {
      setVisible([]);
      setTyping(false);
      setIndex(0);
      idRef.current = 0;
      onConversationReset?.();
      return;
    }
  }, [isInView, onConversationReset]);

  useEffect(() => {
    if (!isInView || messages.length === 0) return;

    if (prefersReducedMotion) {
      setVisible(
        messages.map((msg) => ({
          id: idRef.current++,
          role: msg.role,
          text: msg.text,
          link: msg.link,
        }))
      );
      setTyping(false);
      const maxStep = messages.reduce(
        (max, msg) => Math.max(max, msg.completeStep ?? 0),
        0
      );
      if (maxStep > 0) notifyStep(maxStep);
      return;
    }

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timeouts.push(setTimeout(fn, ms));
    };

    if (index >= messages.length) {
      schedule(() => {
        setVisible([]);
        setTyping(false);
        setIndex(0);
        idRef.current = 0;
        onConversationReset?.();
      }, LYN_WHATSAPP_CHAT_TIMING.endPauseMs);
      return () => timeouts.forEach(clearTimeout);
    }

    const msg = messages[index];
    const isFirst = index === 0;

    const appendMessage = () => {
      setVisible((prev) => [
        ...prev,
        {
          id: idRef.current++,
          role: msg.role,
          text: msg.text,
          link: msg.link,
        },
      ]);
      notifyStep(msg.completeStep);
    };

    if (msg.role === "user") {
      schedule(
        () => {
          appendMessage();
          schedule(
            () => setIndex((i) => i + 1),
            LYN_WHATSAPP_CHAT_TIMING.afterUserMs
          );
        },
        isFirst ? LYN_WHATSAPP_CHAT_TIMING.initialDelayMs : 0
      );
    } else {
      schedule(
        () => setTyping(true),
        isFirst ? LYN_WHATSAPP_CHAT_TIMING.initialDelayMs : 0
      );
      schedule(
        () => {
          setTyping(false);
          appendMessage();
          schedule(
            () => setIndex((i) => i + 1),
            LYN_WHATSAPP_CHAT_TIMING.afterBotMs
          );
        },
        (isFirst ? LYN_WHATSAPP_CHAT_TIMING.initialDelayMs : 0) +
          LYN_WHATSAPP_CHAT_TIMING.typingMs
      );
    }

    return () => timeouts.forEach(clearTimeout);
  }, [
    index,
    isInView,
    messages,
    notifyStep,
    onConversationReset,
    prefersReducedMotion,
  ]);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 flex h-full w-full items-center justify-center px-3 py-4 sm:px-5 sm:py-5"
    >
      <div className="relative aspect-[315/646] h-full max-h-full w-auto max-w-full min-h-0">
        <Image
          src={BotPhone.src}
          alt={alt}
          fill
          className="object-contain"
          sizes="320px"
          priority
        />

        <div
          className="lyn-wa-chat-viewport absolute z-10 flex flex-col"
          aria-live="polite"
          aria-relevant="additions"
        >
          <div
            ref={scrollRef}
            className="lyn-wa-chat-scroll flex min-h-0 flex-1 flex-col gap-1.5 overflow-x-hidden overflow-y-auto"
          >
            {visible.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            <AnimatePresence>
              {typing ? <TypingIndicator /> : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
