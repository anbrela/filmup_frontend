import React from "react";
import { ResumeStepForm } from "@/views/resume/components/resume-step";
import { ResumeStep } from "@/views/resume/components/types/resume-step.type";
import { PersonalStep } from "@/views/resume/components/personal-step";
import { PersonaStepType } from "@/views/resume/components/types/persona-step.type";
import { EducationStep } from "@/views/resume/components/education-step";
import { EducationStep as EducationStepType } from "@/views/resume/components/types/education-step.type";

export type Step = {
  id: number;
  title: string;
  content: React.ReactNode;
  onClickNext?: () => void;
  onClickBack?: () => void;
};

type ResumeStepProps = {
  formatMessage: (id: string) => string;
  resumeStepValues: any;
  setResumeStepValues: any;
  personalStepValues: PersonaStepType;
  setPersonalStepValues: any;
  educationValues: EducationStepType;
  setEducationValues: any;
  goNext: (stepNum: number) => void;
  goBack: (stepNum: number) => void;
};
export const ResumeSteps = ({
  formatMessage,
  resumeStepValues,
  personalStepValues,
  setPersonalStepValues,
  goNext,
  goBack,
  setResumeStepValues,
}: ResumeStepProps) => [
  {
    id: 1,
    title: formatMessage("resume.form.steps.resume.title"),
    content: (
      <ResumeStepForm
        formatMessage={formatMessage}
        values={resumeStepValues}
        onGoNext={(data: ResumeStep) => {
          setResumeStepValues(data);
          goNext(1);
        }}
      />
    ),
  },
  {
    id: 2,
    title: formatMessage("resume.form.steps.personal.title"),
    content: (
      <PersonalStep
        formatMessage={formatMessage}
        values={personalStepValues}
        onGoBack={() => {
          goBack(1);
        }}
        onGoNext={(data: ResumeStep) => {
          setPersonalStepValues(data);
          goNext(2);
        }}
      />
    ),
  },

  {
    id: 3,
    title: formatMessage("resume.form.steps.studies.title"),
    content: (
      <EducationStep
        formatMessage={formatMessage}
        values={personalStepValues}
        onGoBack={() => {
          goBack(1);
        }}
        onGoNext={(data: ResumeStep) => {
          setPersonalStepValues(data);
          goNext(2);
        }}
      />
    ),
  },
  {
    id: 4,
    title: formatMessage("resume.form.steps.experience.title"),
    content: <div>hello</div>,
  },
];
