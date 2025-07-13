//Generate an Image on every question save/update
// -> Issue a request on every question save on BE
// -> Implement a pub-sub mechanism and publish an image generation job.
// -> The consumer would take up the job, fetch the question, and generate an image using the question title.
// -> Save the image on the disk and serve it via CDN.

//Write a corn job to periodically generate images
// -> Write a custom script that fetches all questions
// -> Check if the images exists
// -> if exits and is stale then re-generates accordingly
// -> if the image does not exist then generate it
// -> Save the image on the disk and serve it via CDN
