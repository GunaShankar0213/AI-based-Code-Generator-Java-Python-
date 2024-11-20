# AI Code Generator (Java to Python and Vice Versa)

This repository contains the source code for the **AI-based Code Generator** that can automatically generate, optimize, and fix code in both **Java** and **Python** programming languages. Inspired by the principles of **RNN** (Recurrent Neural Networks) and **LSTM** (Long Short-Term Memory) models, this AI system is designed to understand code context, just like next-word prediction models that learn from large text corpora (e.g., Shakespeare's works). The AI has been fine-tuned for **natural language processing** (NLP) queries to understand and generate relevant code, fix bugs, and optimize codebases.

Additionally, the AI is capable of answering programming-related questions, improving existing code, and generating new functions based on user queries. This project is particularly useful in large codebase environments, where it can generate multiple packages and functions, reducing time spent on manual coding.

## Features

### 1. **Java to Python Code Conversion**
   - The AI can translate Java code into Python and vice versa, making it easy to switch between languages based on project requirements.
   - Supports **syntax conversion**, **logical flow adaptation**, and handling of common programming constructs across both languages.
   - Optimizes code during the conversion process by applying best practices from both languages.

### 2. **Code Generation from Natural Language**
   - The model takes **natural language queries** (e.g., "Generate a sorting algorithm in Python") and converts them into code in the requested programming language.
   - It learns the **context** of user queries and can generate relevant functions or entire programs based on the input.
   - Supports generation of **functions**, **classes**, **algorithms**, and **complete scripts**.

### 3. **Code Fixing and Optimization**
   - The system can analyze code, detect errors or inefficiencies, and suggest improvements.
   - Optimizes code for better readability, performance, and maintainability.
   - Can also fix **syntax errors**, **logical errors**, and suggest improvements for code structure.

### 4. **AI Healthcare Chatbot (Symptoms to Prognosis)**
   - The AI is also designed to function as a **healthcare chatbot** capable of diagnosing diseases based on symptoms.
   - The system takes user input in the form of **symptoms** and provides **possible diagnoses**, along with information about the disease.
   - The chatbot is powered by NLP to understand medical queries and provide relevant answers and advice.

### 5. **Inspired by RNN and LSTM Models**
   - Built from scratch, the AI code generator is inspired by **RNN** and **LSTM** architectures used in **next-word prediction models**.
   - It understands the context and patterns of the input code, allowing it to generate code that is logically correct and contextually appropriate.
   - The model was trained on large datasets of Java and Python code, allowing it to learn the structure and syntax of both languages.

### 6. **Customizable for Future Preferences**
   - The AI can be easily **tuned** to adapt to new coding styles, languages, or preferences by training it on additional datasets.
   - The system is designed to handle **large codebases** and scale efficiently, making it suitable for development in large organizations where managing multiple packages and functions is a challenge.

## Technologies Used

- **Deep Learning**: The AI is built using **transformer-based models**, inspired by the architecture of **RNN** and **LSTM**. These models were trained to learn the context and structure of Java and Python code.
- **Natural Language Processing (NLP)**: NLP techniques are applied to parse and understand natural language queries, enabling the system to generate and fix code based on user input.
- **TensorFlow/PyTorch**: The deep learning models are trained and deployed using **TensorFlow** and **PyTorch** frameworks.
- **Flask/Django**: For serving the AI model through a web-based API, allowing users to interact with it.
- **Java & Python**: The core languages supported for code generation, with optimizations for each language’s syntax and structure.
- **Git/GitHub**: Version control and collaboration, including the use of GitHub actions for CI/CD (Continuous Integration/Continuous Deployment).

## Demo

You can view the **live demo** of the **AI-based Code Generator** on GitHub using the following link:

- [Demo Video](https://github.com/GunaShankar0213/AI-based-Code-Generator-Java-Python-/blob/main/Demo/Astrocode%20Ai%20(1).mp4)

The video demonstrates how the AI generates code based on user queries, provides optimizations, and fixes bugs in real-time.

## Getting Started

### Prerequisites

- Python 3.x
- Java Development Kit (JDK)
- TensorFlow / PyTorch
- Flask / Django for serving the API


This Readme file includes detailed descriptions of the **AI Code Generator**'s features, technologies, installation steps, and usage instructions. It also provides an explanation of the **AI healthcare chatbot**, how it was inspired by **RNN** and **LSTM** models updated to LLm's and Lang-chain, and a link to the **demo video** for better understanding.
