import tensorflow as tf
from transformers import *
from datasets import load_dataset

def run_predict(text):
    # load saved finetuned model
    model = TFT5ForConditionalGeneration.from_pretrained("Model_\\")
    # load saved tokenizer
    tokenizer = RobertaTokenizer.from_pretrained("Model_\\")

     # encode texts by prepending the task for input sequence and appending the test sequence
    query = "Generate Code: " + text
    encoded_text = tokenizer(query, return_tensors='tf', padding='max_length', truncation=True, max_length=48)

    # inference
    generated_code = model.generate(
        encoded_text["input_ids"], attention_mask=encoded_text["attention_mask"],
        max_length=128, top_p=0.95, top_k=50, repetition_penalty=1, num_return_sequences=1
    )

    # decode generated tokens
    decoded_code = tokenizer.decode(generated_code.numpy()[0], skip_special_tokens=True)
    return decoded_code

def predict_from_text(text):
    # run-predict on text
    decoded_code = run_predict(text)
    print("#" * 25); print("QUERY: ", text);
    print()
    print('#' * 25); print("GENERATED: "); print("\n", decoded_code);
    return decoded_code

# example 1
# predict_from_text("Write a function to add two random numbers"); print()