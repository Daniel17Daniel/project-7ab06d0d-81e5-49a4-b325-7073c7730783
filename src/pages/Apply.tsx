import { useEffect } from "react";
import { ApplyForm } from "@/components/sections/ApplyForm";

const Apply = () => {
  useEffect(() => {
    document.title = "Залишити заявку — КіноPoint Film";
  }, []);

  return (
    <div className="pt-24">
      <ApplyForm />
    </div>
  );
};

export default Apply;
