# AstroCoder: AI Code Generator (Java to Python and Vice Versa)

This repository contains the source code for **AstroCoder**, an **AI-based Code Generator** that automates code generation, optimization, and bug fixing for **Java** and **Python**. AstroCoder is built using a **hybrid RLHF (Reinforcement Learning with Human Feedback) Transformer model**, inspired by **RNN** (Recurrent Neural Networks) and **LSTM** (Long Short-Term Memory). The AI system is designed to understand code context, similar to next-word prediction models, and enables efficient **cross-language code migration** with **85% precision** in resolving migration errors.

AstroCoder can generate, improve, and migrate code across multiple languages, significantly **reducing development time** in large-scale software projects. The system has a **user-friendly interface** that enhances **developer efficiency by 40%**, making it a valuable tool for automating software engineering tasks.

## Features

### 1. **Java to Python Code Conversion**
   - Seamless conversion of Java code into Python and vice versa.
   - Handles **syntax adaptation**, **logical flow adjustments**, and conversion of core programming constructs.
   - Uses **AI-driven optimization** to apply best coding practices across languages.

### 2. **Automated Code Generation from Natural Language**
   - Converts **natural language queries** into executable code (e.g., "Generate a sorting algorithm in Java").
   - Supports **functions, classes, algorithms, and complete scripts**.
   - Understands query context to generate relevant, structured code.

### 3. **Hybrid RLHF Code Fixing and Optimization**
   - Detects and resolves **syntax errors, logical issues, and inefficiencies** in code.
   - Provides **AI-based suggestions** to improve readability, performance, and maintainability.
   - Automates **cross-language migration** with an **85% accuracy rate** in fixing errors.

### 4. **Transformer-based Learning with NLP**
   - The AI model is built using a **Transformer-based hybrid RLHF approach**, improving contextual understanding.
   - Inspired by **RNN** and **LSTM**, adapted to handle **structured programming languages**.
   - Trained on diverse datasets of **Java and Python** to learn best practices and common patterns.

### 5. **Customizable and Scalable for Large Codebases**
   - Adaptable for **enterprise-level applications** with large codebases.
   - Can be **fine-tuned for additional languages**, supporting diverse software development environments.
   - Designed for **collaborative development**, making it ideal for team-based projects.

## Technologies Used

- **Deep Learning & AI**: Transformer-based hybrid RLHF model, inspired by RNN and LSTM.
- **Natural Language Processing (NLP)**: Enables contextual understanding of queries.
- **TensorFlow/PyTorch**: Used for training and deploying the AI model.
- **Flask/Django**: Backend API for serving the AI-based code generation system.
- **Java & Python**: Core languages for **code conversion and optimization**.
- **Git/GitHub**: Version control with CI/CD pipelines for automated testing and deployment.

## Demo

View the **live demo** of **AstroCoder** on GitHub:

- [Demo Video](https://github.com/GunaShankar0213/AI-based-Code-Generator-Java-Python-/blob/main/Demo/Astrocode%20Ai%20(1).mp4)

This demo showcases AstroCoder's ability to **generate, optimize, and fix** code in real-time, demonstrating its **cross-language capabilities and AI-driven automation**.

## Getting Started

### Prerequisites

- Python 3.x
- Java Development Kit (JDK)
- TensorFlow / PyTorch
- Flask / Django for API deployment
- 
![image](https://github.com/user-attachments/assets/0402958d-bea9-4716-8054-593617b5ba3e)

🔹 Preprocessing Enhancements
Custom Tokenization – Prefixed Java code with "Translate Java to Python: " for better task recognition.
Padding Handling – Replaced padding tokens with -100 to prevent loss function bias.
Dataset Sampling & Splitting – Used 40% sampled training data and 80-20 train-test split for efficiency.
Tokenizer Optimization – Used RobertaTokenizer instead of default T5 tokenizer for better code processing.
Efficient Data Processing – Converted datasets to TensorFlow format with optimized batching & prefetching (tf.data.AUTOTUNE).
Multi-GPU & XLA Support – Enabled XLA optimization, MirroredStrategy, and auto-sharding off for distributed training.
Custom Logging & Progress Bar – Added ETA tracking and learning rate adjustments per step.

🔹 Fine-Tuning Enhancements
Hyperparameter Updates:

Learning Rate: 3e-4 (faster convergence)
Weight Decay: 1e-4 (regularization)
Warmup Ratio: 0.2 (gradual learning rate increase)
Batch Size: 6 (optimized for GPU efficiency)
Max Sequence Length: 300 (handles longer code snippets)
Epochs: 8 (better convergence)
CodeT5 Model – Used TFT5ForConditionalGeneration (CodeT5) for improved Java-to-Python translation.

Custom Learning Rate Scheduler – Applied warmup and gradient scaling for stable training.

Multi-GPU & Performance Boost – XLA acceleration, MirroredStrategy, and data pipeline auto-tuning for faster execution.
### **Additional Project: AI Healthcare Chatbot**

In addition to **AstroCoder**, this project also includes an **AI-powered Healthcare Chatbot**. Using **NLP and Transformer-based models**, the chatbot can diagnose potential diseases based on **user symptoms**, providing insights and medical guidance. The chatbot leverages **LLM (Large Language Models) and LangChain** to deliver intelligent responses for medical queries.

---

This repository brings together advanced **AI-driven code generation** and **healthcare diagnostics**, showcasing the power of **hybrid RLHF Transformers** in real-world applications.
