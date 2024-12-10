# TextifyPro Setup and Usage Tutorial

**TextifyPro** is a platform offering services like transcription, live dictation, subtitling, and analysis. The landing page showcases these services and available plans. Users can log in, choose services, book demos, and purchase plans.

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or above)
- **npm** (Node Package Manager, included with Node.js)

Verify installations by running the following commands:

```bash
node -v
npm -v
Installation Steps
Follow these steps to set up TextifyPro on your local machine:

1. Clone the Repository
Use the following command to clone the repository and navigate to the project folder:

bash
Copy code
git clone https://github.com/your-repo-name/TextifyPro.git
cd TextifyPro
2. Install Dependencies
Run the following command to install all the required dependencies:

bash
Copy code
npm install
3. Start the Development Server
To launch the app locally, use:

bash
Copy code
npm start
The app will run on http://localhost:3000.

4. Build for Production (Optional)
If you want to create a production-ready build, use:

bash
Copy code
npm run build
Project Structure
Here’s a high-level overview of the project structure:

graphql
Copy code
TextifyPro/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Pages like Home, Login, etc.
│   ├── services/           # API and business logic
│   ├── styles/             # CSS or styled-components
│   └── index.js            # Entry point for React
├── package.json            # Project metadata and dependencies
└── README.md               # Project overview
Features of TextifyPro
Landing Page
Displays available services like Transcription, Live Dictation, Subtitling, and Analyzer.
Provides an overview of subscription plans.
User Authentication
Users must log in to access the services.
Secure and user-friendly authentication flow.
Service Selection
Users can choose from the available services after logging in.
Booking a Demo
Users can book a demo to experience the services before subscribing.
Subscription Plans
Various plans are available to cater to user needs.
Dashboard
A user-friendly dashboard to manage services and view plan details.
## Code Example: Service Selection

Below is an example of how users can dynamically select services in **TextifyPro**:

```jsx
import React, { useState } from "react";
import { Button } from "@mui/material";

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div>
      <h2>Select a Service</h2>
      <Button onClick={() => handleServiceSelect("Transcription")}>Transcription</Button>
      <Button onClick={() => handleServiceSelect("Live Dictation")}>Live Dictation</Button>
      <Button onClick={() => handleServiceSelect("Subtitling")}>Subtitling</Button>
      <Button onClick={() => handleServiceSelect("Analyzer")}>Analyzer</Button>
      {selectedService && <p>You selected: {selectedService}</p>}
    </div>
  );
};

export default ServiceSelection;
