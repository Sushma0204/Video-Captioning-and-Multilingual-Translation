train_path = r"C:\Users\yashp\Video Captioning Using Encoder Decoder & VGG\Data\training_data"
test_path = r"C:\Users\yashp\Video Captioning Using Encoder Decoder & VGG\Data\testing_data"
batch_size = 128
learning_rate = 0.0007
epochs = 100
latent_dim = 512
num_encoder_tokens = 4096
num_decoder_tokens = 1500
time_steps_encoder = 80
time_steps_decoder= 10
max_probability = -1
save_model_path = r"C:\Users\yashp\Video Captioning Using Encoder Decoder & VGG\model_final"
validation_split = 0.15
max_length = 10
search_type = 'greedy'