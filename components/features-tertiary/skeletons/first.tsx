"use client";

import {
  CogIcon,
  ErrorIcon,
  FileIcon,
  HubspotIcon,
  SalesforceIcon,
  SheetsIcon,
} from "@/icons";
import {
  FifthIcon,
  FirstIcon,
  FourthIcon,
  RecentActivityIcon,
  SecondIcon,
  ThirdIcon,
} from "@/icons/bento-icons";
import { cn } from "@/lib/utils";
import { IconClock } from "@tabler/icons-react";
import { motion } from "motion/react";

export const SkeletonOne = () => {
  const cardItems = [
    {
      icon: <FirstIcon />,
      iconClassName: "bg-blue-500",
      title: "Site Assessment Complete",
      description: "Foundation checked, measurements taken, quote provided",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-green-200 bg-green-100 dark:border-green-200/10 dark:bg-green-200/10">
          <p className="text-[10px] font-bold text-green-600 dark:text-green-400">
            COMPLETE
          </p>
        </div>
      ),
    },
    {
      icon: <SecondIcon />,
      iconClassName: "bg-green-500",
      title: "Permit Approved",
      description:
        "Building department approved plans. Inspections scheduled.",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-green-100 border border-green-200 dark:bg-green-100/10 dark:border-green-200/10">
          <p className="text-[10px] font-bold text-green-500">APPROVED</p>
        </div>
      ),
    },
    {
      icon: <ThirdIcon />,
      iconClassName: "bg-orange-500",
      title: "Foundation Cut Complete",
      description: "Opening cut, excavation done, ready for window install",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-green-100 border border-green-200 dark:bg-green-100/10 dark:border-green-200/10">
          <p className="text-[10px] font-bold text-green-500">COMPLETE</p>
        </div>
      ),
    },
    {
      icon: <FourthIcon />,
      iconClassName: "bg-black",
      title: "Window Installed",
      description: "Egress window fitted, sealed, and secured",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-green-100 dark:bg-green-100/10 dark:border-green-100/10  border border-green-200">
          <p className="text-[10px] font-bold text-green-500">COMPLETE</p>
        </div>
      ),
    },
    {
      icon: <FifthIcon />,
      iconClassName: "bg-indigo-500",
      title: "Well & Drainage Setup",
      description: "Window well installed, drainage system in place",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-orange-100 border border-orange-200 dark:border-orange-200/10 dark:bg-orange-200/10">
          <p className="text-[10px] font-bold text-orange-600">IN PROGRESS</p>
        </div>
      ),
    },

    {
      icon: <SecondIcon />,
      iconClassName: "bg-purple-500",
      title: "Inspection Scheduled",
      description:
        "Building inspector coming to verify code compliance",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-200/10 dark:bg-neutral-200/10">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-600">Tomorrow</p>
        </div>
      ),
    },
    {
      icon: <ThirdIcon />,
      iconClassName: "bg-green-500",
      title: "Final Walkthrough",
      description: "Project review with homeowner, warranty issued",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-200/10 dark:bg-neutral-200/10">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-600">Pending</p>
        </div>
      ),
    },
  ];
  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mx-auto w-full h-full absolute inset-x-10 inset-y-2 pt-2 px-2">
      <Card>
        {cardItems.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="w-full"
          >
            <CardItem
              index={idx}
              key={item.title}
              icon={item.icon}
              iconClassName={item.iconClassName}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-black/10 gap-4 border bg-white dark:bg-neutral-900 border-transparent ring-1 rounded-tl-[16px] ring-black/10 flex flex-col items-start flex-1">
      <div className="flex items-center gap-2 border-b w-full py-2 px-4">
        <RecentActivityIcon />
        <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
          Project Timeline
        </p>
      </div>

      {children}
    </div>
  );
};

const CardItem = ({
  icon,
  iconClassName,
  title,
  description,
  badge,
  index,
}: {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
  badge: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="flex justify-between items-center  w-full pl-4 relative overflow-hidden">
      <div className=" items-center gap-2 flex">
        <div
          className={cn(
            "size-5 rounded-sm bg-blue-500 text-white flex items-center justify-center",
            iconClassName
          )}
        >
          {icon}
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {title}
        </p>
        {badge}
      </div>
      <motion.p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-[16rem] w-full text-left truncate">
        {description.split("").map((item, idx) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.01 + index * 0.1 }}
            key={idx}
          >
            {item}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1 w-fit rounded-sm px-1 py-0.5 border border-neutral-200 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
