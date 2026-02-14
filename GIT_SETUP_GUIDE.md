# Git Setup & GitHub Guide for Windows

Since Git is not installed on your system, follow these steps to download, install, and connect your project to GitHub.

## 1. Download and Install Git

1.  **Download**: Go to [git-scm.com/download/win](https://git-scm.com/download/win).
2.  **Auto-Download**: The download should start automatically. If not, click on "Click here to download manually" (usually the "64-bit Git for Windows Setup").
3.  **Run Installer**: Open the downloaded `.exe` file.
4.  **Installation Steps**:
    *   Click **Next** through the license and components screens.
    *   **Editor**: You can leave the default (usually Vim) or choose VS Code if you have it installed.
    *   **Main Branch**: Select "Override the default branch name for new repositories" and set it to `main`.
    *   **Path Environment**: Select "Git from the command line and also from 3rd-party software" (Recommended).
    *   **Keep clicking Next** accepting the defaults for the rest of the options.
    *   Click **Install**.
5.  **Finish**: Once done, check "Launch Git Bash" or just click Finish.

**IMPORTANT**: After installing, you **MUST** close your current terminal (PowerShell/Command Prompt) and open a new one for the changes to take effect.

## 2. Configure Git (One-time Setup)

Open your new terminal (PowerShell or Git Bash) and run these commands to set your identity (replace with your actual info):

```bash
git config --global user.name "Sushmita Sen"
git config --global user.email "sushmitaprojects@gmail.com"
```

## 3. Initialize Your Project

Navigate to your project folder in the terminal:

```bash
cd "c:\Sushmita Projects\Sushmita"
```

Now, initialize the repository and save your files:

```bash
# 1. Initialize Git in this folder
git init

# 2. Add all files to the staging area (The '.' means everything)
git add .

# 3. Commit (Save) the changes
git commit -m "Initial commit - Portfolio Website"
```

## 4. Connect to GitHub

Now, link your local project to the repository you created on GitHub:

```bash
# 1. Rename the branch to 'main'
git branch -M main

# 2. Add the remote link (Connect to GitHub)
git remote add origin https://github.com/sushmitaprojects-spec/Portfolio.git

# 3. Push your code
git push -u origin main
```

## 5. Giving Permission (Authentication)

When you run the `git push` command, a "GitHub Sign-in" window should pop up.

1.  **Select**: "Sign in with your browser".
2.  **Browser**: Your default web browser will open.
3.  **Authorize**: Click "Authorize git-credential-manager".
4.  **Confirm**: Enter your GitHub password if prompted.

Once authorized, your terminal will upload the files, and you will see a success message!
