import React from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { HumanIcon, IntegrationIcon, WorkflowIcon } from "@/icons";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/four";

export const FeaturesTertiary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800  divide-neutral-200 dark:divide-neutral-800">
          <div className="md:border-r border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Your Project Journey
              </h2>
              <CardDescription>
                Track every step from assessment to completion. Full transparency
                with real-time updates at every stage.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Happy Customers
              </h2>
              <CardDescription>
                Trusted by homeowners and contractors across Ottawa. Quality
                work. Fair pricing. Professional service every time.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20% ">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="md:border-r border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Clear Communication
              </h2>
              <CardDescription>
                Talk to real people, not voicemail. Text or call anytime. Expert
                advice when you need it. Updates at every stage.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20%  mask-r-from-50%">
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div className=" dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Warranty Protected
              </h2>
              <CardDescription>
                All installations come with warranty coverage. We stand behind
                our work.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="">
              <SkeletonFour />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-md text-balance">
      {children}
    </p>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 flex flex-col md:h-80 overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
