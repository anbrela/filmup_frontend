import { Resume } from "@/views/resume/resume";

const ResumePage = ({ params: { locale } }: { params: { locale: string } }) => {
  return <Resume locale={locale} />;
};

export default ResumePage;
