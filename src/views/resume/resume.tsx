"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ResumeSteps, Step } from "@/views/resume/components/utils";
import { useIntl } from "@/shared/hooks/intl/use-intl";
import { ConfirmationModal } from "@/components/content/modals/confirmation_mocal/confirmation-modal";
import { Button } from "@/components/content/button/button";
import { PersonaStepType } from "@/views/resume/components/types/persona-step.type";
import { Loader } from "@/components/content/loader/loader";
import { EducationStep } from "@/views/resume/components/types/education-step.type";
import { useFormikContext } from "formik";

export const Resume = ({ locale }: { locale: string }) => {
  const { formatMessage } = useIntl();
  const [resumeStepValues, setResumeStepValues] = useState({});
  const [personalStepValues, setPersonalStepValues] = useState(
    {} as PersonaStepType,
  );
  const [educationValues, setEducationValues] = useState({} as EducationStep);
  const [steps, setSteps] = useState<Step[]>([]);
  const [totalSteps, setTotalSteps] = useState(0);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [initialRender, setInitialRender] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState({
    visible: false,
    stepNum: 0,
  });

  const formik = useFormikContext();

  useEffect(() => {
    setSteps(
      ResumeSteps({
        resumeStepValues,
        goNext,
        personalStepValues,
        setPersonalStepValues,
        educationValues,
        setEducationValues,
        goBack,
        setResumeStepValues,
        formatMessage,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resumeStepValues, personalStepValues, educationValues]);

  useEffect(() => {
    if (steps?.length && initialRender) {
      setTotalSteps(steps?.length);
      //setCurrentStep(steps?.[0]?.id - 1);
      setCurrentStep(2);
      setInitialRender(false);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps]);

  const goNext = (stepNum: number) => {
    setCurrentStep(stepNum);
  };

  const goBack = (numStep: number) => {
    setShowModal({
      visible: true,
      stepNum: numStep,
    });
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-gray-900 overflow-auto p-8 flex items-center justify-center ">
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-gray-900 overflow-auto p-8 flex items-center justify-center ">
      <ConfirmationModal
        visible={showModal?.visible}
        title={formatMessage("resume.form.steps.modal.title")}
        message={formatMessage("resume.form.steps.modal.message")}
        onClose={() => setShowModal({ visible: false, stepNum: 0 })}
        secondaryButton={
          <Button
            color="light"
            kind="secondary"
            className="text-gray-800"
            label={formatMessage("resume.form.steps.modal.cancel")}
            onClick={() => setShowModal({ visible: false, stepNum: 0 })}
          />
        }
        primaryButton={
          <Button
            label={formatMessage("resume.form.steps.modal.accept")}
            onClick={() => {
              setCurrentStep(showModal?.stepNum - 1);
              setShowModal({ visible: false, stepNum: 0 });
            }}
          />
        }
      />
      <div className="w-4/6 h-4/6 bg-white cool-shadow rounded-xl relative flex items-center justify-center">
        <div className="absolute -top-8 left-0">
          <div className="flex items-center space-x-2 ">
            <span className="italic text-gray-400 uppercase text-xs">
              {steps?.[currentStep]?.title}
            </span>
            <span className="text-primary opacity-50 italic text-xs">{`${parseInt(
              String((currentStep / totalSteps) * 100),
            )}%`}</span>
          </div>
        </div>
        <div className="absolute w-full h-2 rounded top-0 left-0">
          <div
            className="h-full bg-primary"
            style={{
              width: `${(currentStep / totalSteps) * 100}%`,
            }}
          />
        </div>
        <div className="py-4 w-full flex items-center justify-center h-full">
          {steps?.[currentStep]?.content}
        </div>
      </div>
    </div>
  );
};
