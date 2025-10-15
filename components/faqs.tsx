"use client";
import React, { useRef, useState } from "react";
import { Container } from "./container";
import { UserChatIcon } from "@/illustrations/general";
import { Heading } from "./heading";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FAQs = () => {
  const questions = [
    {
      question: "What is an egress window?",
      answer: "An egress window is a window that's big enough for someone to escape through in an emergency. It's required by Ontario Building Code for basement bedrooms and living spaces. It needs to be a certain size and height from the floor.",
    },
    {
      question: "Do I need an egress window in my basement?",
      answer:
        "Yes, if you have a bedroom or living space in your basement, Ontario Building Code requires an egress window. This gives people a safe way to get out in case of fire or other emergencies.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most egress window projects take 2-5 days from start to finish. The exact time depends on your home's foundation, the work needed, and weather. We give you a clear timeline when we quote your project.",
    },
    {
      question: "Do you handle permits and inspections?",
      answer:
        "Yes. We manage all permits and schedule all inspections. You don't need to deal with the city or building officials. We handle everything to make sure your project passes inspection the first time.",
    },
    {
      question: "How much does an egress window cost?",
      answer:
        "Every project is different. Cost depends on your foundation type, window size, drainage needs, and finishing work. We provide free on-site assessments and clear quotes with no hidden fees. Contact us for your specific quote.",
    },
  ];
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container>
        <UserChatIcon />
        <Heading className="my-10 md:my-20">Frequently Asked Questions</Heading>

        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 p-4 md:p-8"
    >
      <div className="flex items-center justify-between ">
        <h3 className="text-lg md:text-2xl font-bold font-display">
          {question}
        </h3>
        <div className="size-6 rounded-full relative bg-black dark:bg-white flex items-center justify-center">
          <IconMinus
            className={cn(
              "size-6 text-white dark:text-black absolute inset-0 transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
          />
          <IconPlus
            className={cn(
              "size-6 text-white dark:text-black absolute inset-0 scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="overflow-hidden"
      >
        <motion.p
          key={String(open)}
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="text-left mt-4 text-neutral-600 dark:text-neutral-200"
        >
          {answer}
        </motion.p>
      </motion.div>
    </button>
  );
};
