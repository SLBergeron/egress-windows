import React from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { HumanIcon, IntegrationIcon, WorkflowIcon } from "@/icons";

export const FeaturesSecondary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden" id="process">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Complete Egress Solutions
              </h2>
              <CardDescription>
                We handle cutting, excavation, window installation, well setup,
                drainage, and all finishing work through our trusted network of
                professionals.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Permits and Inspections
              </h2>
              <CardDescription>
                We manage all permits, schedule inspections, and ensure your
                project meets Ontario Building Code requirements.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-50% mask-t-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          <div>
            <div className="flex items-center gap-2">
              <WorkflowIcon />
              <h3 className="font-bold text-lg text-neutral-600 dark:text-neutral-400">
                Design to Install
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
              From planning to final walkthrough, we coordinate all trades and
              keep your project on track.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IntegrationIcon />
              <h3 className="font-bold text-lg text-neutral-600 dark:text-neutral-400">
                Trusted Network
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
              All work done by licensed, insured professionals. Clean sites.
              Quality work. On time.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <HumanIcon />
              <h3 className="font-bold text-lg text-neutral-600 dark:text-neutral-400">
                One Point of Contact
              </h3>
            </div>

            <p className="text-neutral-500 text-base mt-2">
              No juggling multiple contractors. We handle scheduling,
              communication, and coordination.
            </p>
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
    <p className="text-neutral-600 mt-2 max-w-md text-balance">{children}</p>
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
