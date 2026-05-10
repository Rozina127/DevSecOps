# 🛡️ DevSecOps Threat Monitor Dashboard

[![DevSecOps Pipeline](https://github.com/Rozina127/DevSecOps/actions/workflows/devsecops-pipeline.yml/badge.svg)](https://github.com/Rozina127/DevSecOps/actions/workflows/devsecops-pipeline.yml)
[![CodeQL SAST](https://github.com/Rozina127/DevSecOps/actions/workflows/codeql.yml/badge.svg)](https://github.com/Rozina127/DevSecOps/actions/workflows/codeql.yml)
[![OWASP ZAP DAST](https://github.com/Rozina127/DevSecOps/actions/workflows/dast.yml/badge.svg)](https://github.com/Rozina127/DevSecOps/actions/workflows/dast.yml)

Welcome to the **DevSecOps Threat Monitor Dashboard**! This project is a **complete, hands-on implementation** of every major DevSecOps concept — from source code scanning to live attack testing. It serves as an enterprise-grade portfolio piece showcasing real-world DevSecOps engineering skills.

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

## 📌 Complete DevSecOps Implementation

| Phase | Concept | Tool | Status |
|---|---|---|---|
| Phase 1 | **App Setup** — Vulnerable baseline created | Next.js + vulnerable deps | ✅ Done |
| Phase 2 | **SCA** — Software Composition Analysis | Snyk | ✅ Done |
| Phase 2 | **Secret Scanning** — Leaked credentials check | TruffleHog | ✅ Done |
| Phase 3 | **Container Scanning** — Docker image CVEs | Trivy | ✅ Done |
| Phase 3 | **Dockerfile Hardening** — Non-root user, Alpine | Docker Multi-stage | ✅ Done |
| Phase 4 | **SAST** — Static code analysis without running app | CodeQL | ✅ Done |
| Phase 5 | **DAST** — Live attack testing on running app | OWASP ZAP | ✅ Done |
| Phase 6 | **IaC Scanning** — Dockerfile & YAML misconfigs | Checkov | ✅ Done |
| Phase 7 | **SBOM** — Software Bill of Materials | Syft | ✅ Done |

---

## 🔬 Pipeline Architecture

```
📦 Git Push / Pull Request
        │
        ├──► 🔐 TruffleHog      (Secret Scanning)       → Blocks leaked API keys
        ├──► 📦 Snyk SCA         (Library CVEs)          → Blocks vulnerable packages  
        ├──► 🧠 CodeQL SAST      (Source Code Analysis)  → Finds XSS, Injection flaws
        ├──► 🏗️  Checkov IaC     (Infra Misconfigs)      → Checks Dockerfile & YAML
        ├──► 🐳 Trivy Container  (Image Scanning)        → Scans OS packages in Docker
        ├──► 📋 Syft SBOM        (Bill of Materials)     → Lists all dependencies
        └──► 🕵️  OWASP ZAP DAST  (Live Attack Testing)   → Attacks running application
```

## 🔮 Future Scope

1. **Cloud Deployment:** Deploy to AWS ECS or Azure Container Apps.
2. **Kubernetes Security:** Add **OPA Gatekeeper** or **Kyverno** for K8s policy enforcement.
3. **Runtime Security:** Integrate **Falco** for real-time container threat detection.
4. **SonarQube:** Self-hosted SAST with custom quality gates.

---

## 💻 How to Run This Project Locally

You can run this project in two ways:

### 1. Using Node.js (Development Mode)
Make sure you have Node.js (v18+) installed.

```bash
# Clone the repository
git clone https://github.com/Rozina127/DevSecOps.git

# Go into the project folder
cd DevSecOps/devsecops-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 2. Using Docker (Production Mode)
Make sure **Docker Desktop** is installed and running.

```bash
# Step 1: Go into the project folder
cd DevSecOps/devsecops-dashboard

# Step 2: Build the Docker image
docker build -t threat-monitor-app:latest .

# Step 3: Run the container (with port mapping so localhost:3000 works)
docker run -d -p 3000:3000 --name devsecops-app threat-monitor-app:latest
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

> ⚠️ **Important:** Always use `-p 3000:3000` when running Docker, otherwise `localhost:3000` will NOT work!

```bash
# To stop the container when done
docker stop devsecops-app

# To remove the container
docker rm devsecops-app
```
