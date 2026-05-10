# 🛡️ DevSecOps Threat Monitor Dashboard

Welcome to the **DevSecOps Threat Monitor Dashboard**! This project is a practical demonstration of integrating security practices directly into the Software Development Life Cycle (SDLC). It serves as a perfect portfolio piece to showcase DevSecOps engineering skills.

---

## 📖 What is DevSecOps?
**DevSecOps** stands for **Development, Security, and Operations**. 
Traditionally, security was checked at the very end of the software development process. In DevSecOps, we "Shift Left," meaning we integrate automated security checks at every stage of development (coding, building, testing, deploying). This ensures that vulnerabilities are caught and fixed early, making the application inherently secure.

---

## 🚀 Project Overview
This project is a React/Next.js application. We intentionally introduced known vulnerabilities to demonstrate how security pipelines detect them. Then, we implemented the fixes to showcase a fully automated, secure CI/CD process (The "Green Pipeline").

### 🛠️ Tech Stack
* **Frontend:** Next.js, React, Tailwind CSS
* **Containerization:** Docker (Multi-stage builds, secure non-root user)
* **CI/CD Pipeline:** GitHub Actions
* **Security Tools:**
  * **Snyk:** Software Composition Analysis (SCA) for finding vulnerable libraries.
  * **TruffleHog:** Secret Scanning to prevent API keys and passwords from leaking.
  * **Trivy:** Container Image Scanning to find OS-level vulnerabilities in Docker images.

---

## 📌 What We Have Done So Far

* ✅ **Phase 1: Vulnerable App Setup** 
  * Created a modern Next.js dashboard UI.
  * Intentionally installed vulnerable dependencies (`axios@0.21.1`, `lodash@4.17.15`) to create a realistic insecure environment.
* ✅ **Phase 2: Automated Security Pipeline (The Red Pipeline)** 
  * Configured GitHub Actions to automatically run on every code push.
  * Integrated **Snyk** and **TruffleHog** as security gates. 
  * Successfully demonstrated the pipeline failing and blocking the deployment due to the detected vulnerabilities.
* ✅ **Phase 3: The Green Pipeline & Container Security** 
  * Fixed the vulnerabilities by updating the dependencies to their latest secure versions.
  * Wrote a secure `Dockerfile` implementing best practices (using a lightweight Alpine image and running as a non-root `devsecops_user`).
  * Added **Trivy** to the pipeline to scan the final Docker container. 
  * Achieved a 100% secure, passing pipeline.

---

## 🔮 What We Will Do Next (Future Scope)

To make this a complete Enterprise-grade DevSecOps project, we will add:
1. **SAST (Static Application Security Testing):** Integrate **SonarQube** or **CodeQL** to analyze our custom source code for logical flaws (e.g., XSS, SQLi).
2. **DAST (Dynamic Application Security Testing):** Use **OWASP ZAP** to attack and test the running application for real-time vulnerabilities.
3. **IaC Scanning (Infrastructure as Code):** Scan Kubernetes manifests or Terraform scripts using **Checkov** or **tfsec** to prevent cloud misconfigurations.
4. **Cloud Deployment:** Deploy the secure containerized application to AWS or Azure.

---

## 💻 How to Run This Project Locally

You can run this project in two ways:

### 1. Using Node.js (Development Mode)
Make sure you have Node.js (v18+) installed.

```bash
# Clone the repository
git clone https://github.com/Rozina127/DevSecOps.git
cd devsecops-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Using Docker (Production Mode)
Make sure Docker Desktop is installed and running.

```bash
# Build the secure Docker image
docker build -t threat-monitor-app:latest .

# Run the Docker container on port 3000
docker run -p 3000:3000 threat-monitor-app:latest
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
