import { Download } from "lucide-react";
import { Button } from "./ui/button";

const DownloadButton = () => {
  const handleDownload = () => {
    // Create a link to the GitHub repository or show download instructions
    const message = `To download the source code:

1. Connect this project to GitHub from the top-right GitHub button
2. Clone the repository using: git clone <your-repo-url>

Or download directly from your connected GitHub repository.`;
    
    alert(message);
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 z-50 glass-card glow-effect shadow-lg hover:scale-105 transition-transform duration-300"
      size="lg"
    >
      <Download className="mr-2 h-5 w-5" />
      Download Source Code
    </Button>
  );
};

export default DownloadButton;
