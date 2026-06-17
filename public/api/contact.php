<?php
// ============================================================
// Contact form proxy — replaces the Next.js /api/contact route
// Update the two constants below to match your .env.local values
// ============================================================
define('WP_API_URL',        'https://api.remotedosimetrist.com/wp-json/custom/v1/contact-submission-next');
define('WP_API_SECRET_KEY', 'YOUR_WP_API_SECRET_KEY_HERE'); // <-- replace this

header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

$input = file_get_contents('php://input');
if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Empty request body']);
    exit();
}

$ch = curl_init(WP_API_URL);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'x-api-key: ' . WP_API_SECRET_KEY,
    ],
    CURLOPT_POSTFIELDS     => $input,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_TIMEOUT        => 30,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error    = curl_error($ch);
curl_close($ch);

if ($response === false) {
    error_log('Contact proxy cURL error: ' . $error);
    http_response_code(500);
    echo json_encode(['success' => false]);
    exit();
}

http_response_code($httpCode);
echo $response;
