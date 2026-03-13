import iitp from "../../../assets/images/iitp.jpg";
import cert from "../../../assets/cert.pdf";
import Button from "../../ui/Button";

const Certifications = () => {
  const handleViewCertificate = () => {
    window.open(cert, "_blank");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-start">
        <img className="w-10 h-10 rounded-full" src={iitp} alt="IITP Logo" />
        <div className="flex flex-col gap-1">
          <p>Korean TOPCIT Certified Level III</p>
          <p className="text-text-muted text-sm">IITP</p>
          <p className="text-text-muted text-sm">Credential ID TL2506000111</p>
          <Button
            variant="outline"
            className="mt-5 text-xs w-fit"
            onClick={handleViewCertificate}
          >
            View Certificate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
