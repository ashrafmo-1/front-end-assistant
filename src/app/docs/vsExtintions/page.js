import React from 'react'

const page = () => {
  return (
  <section className="vsExtensionsDoc p-3">
    <h1 className="docTitle text-3xl font-bold mb-4" style={{color: "var(--text_color)"}}>
      Visual Studio Code Extensions
    </h1>
    <p className="docIntro text-lg mb-4" style={{color: "var(--description_color)"}}>
      Visual Studio Code (VS Code) extensions are powerful tools that enhance the development environment. These extensions can provide support for additional languages, enhance code readability, and streamline your workflow.
    </p>
    <div className="docSections mb-8">
      <h2 className="sectionTitle text-2xl font-semibold mb-3" style={{color: "var(--text_color)"}}>
        Recommended Extensions for Developers
      </h2>
      <ul className="list-disc ml-5" style={{color: "var(--description_color)"}}>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" className="text-blue-400 underline">
            ESLint
          </a> - Integrates ESLint JavaScript into VS Code.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" className="text-blue-400 underline">
            Prettier
          </a> - Code formatter that supports multiple languages and formats code according to style guidelines.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers" className="text-blue-400 underline">
            Remote - Containers
          </a> - Develop inside a container, a remote machine, or the Windows Subsystem for Linux (WSL).
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools" className="text-blue-400 underline">
            C/C++ for Visual Studio Code
          </a> - Provides rich language support for C/C++.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-python.python" className="text-blue-400 underline">
            Python
          </a> - Linting, debugging, and IntelliSense for Python.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp" className="text-blue-400 underline">
            C#
          </a> - Support for C# development, including syntax highlighting and debugging.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" className="text-blue-400 underline">
            GitHub Copilot
          </a> - AI pair programmer which suggests line completions and entire function bodies as you type.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter" className="text-blue-400 underline">
            Jupyter
          </a> - Provides Jupyter notebook support for Python, Julia, and R within VS Code.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker" className="text-blue-400 underline">
            Docker
          </a> - Makes it easy to create, manage, and debug containerized applications.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=redhat.java" className="text-blue-400 underline">
            Language Support for Java by Red Hat
          </a> - Provides Java language support via Eclipse JDT Language Server.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode" className="text-blue-400 underline">
            IntelliCode
          </a> - AI-assisted development features for Python, TypeScript/JavaScript, and more.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome" className="text-blue-400 underline">
            Debugger for Chrome
          </a> - Allows you to debug your JavaScript code in the Chrome browser.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" className="text-blue-400 underline">
            GitLens
          </a> - Supercharges the Git capabilities built into Visual Studio Code.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack" className="text-blue-400 underline">
            Remote Development
          </a> - Allows you to use a container, remote machine, or the WSL as a full-featured development environment.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools" className="text-blue-400 underline">
            Kubernetes
          </a> - Develop, deploy, and debug Kubernetes applications.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.powershell" className="text-blue-400 underline">
            PowerShell
          </a> - Develop PowerShell scripts in VS Code.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh" className="text-blue-400 underline">
            Remote - SSH
          </a> - Connect to any location by opening folders on a remote machine/VM using SSH.
        </li>
      </ul>
    </div>
  </section>
  )
}

export default page;