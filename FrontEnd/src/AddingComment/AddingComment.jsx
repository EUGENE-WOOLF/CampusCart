import { Color } from 'maplibre-gl';
import React, { useState } from 'react';

function ReviewForm() {
    // Local state to track the review content and any status messages
    const [review, setReview] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page refresh on form submit

        // Define the payload you want to send
        const payload = { review };

        // Send a POST request to your API endpoint
        fetch('http://localhost:3000/api/reviews', { // Update this URL as needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to post review");
                }
                return response.json();
            })
            .then(data => {
                setStatus('Review submitted successfully!');
                setReview(''); // Clear form after submitting
            })
            .catch(error => {
                console.error('Error:', error);
                setStatus('There was an error submitting your review.');
            });
    };

    return (
        <div>
            <h2>Submit Your Review</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Write your review here..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                    rows="5"
                    cols="50"
                />
                <br />
                <button type="submit">Post Review of the Place</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
}

export default ReviewForm;