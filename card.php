<?php
require('./I18N/Arabic.php'); 
$Arabic = new I18N_Arabic('Glyphs'); 
// require 'vendor/autoload.php';
// require_once 'ar-php/src/Arabic.php';
$lang = $_GET["lang"];
$name = $_GET["name"];
header('Content-type: image/jpeg');
if ($lang == 'ar') {
    $jpg_image = imagecreatefromjpeg('Eid-AR.jpg');
} else {
    $jpg_image = imagecreatefromjpeg('Eid-EN.jpg');
}
$color = imagecolorallocate($jpg_image, 175, 151, 80);

// text, font and size to draw
$text = $name;
$size = 32;

$text = $Arabic->utf8Glyphs($text);
// if ($lang == 'ar') {
    // $obj = new I18N_Arabic('Glyphs');
    // $text = $obj->utf8Glyphs($text);
//     $font = dirname(__FILE__) . '/fontar.ttf';
// } else {
    $font = dirname(__FILE__) . '/fonten.ttf';
// }

// determine the size of the text so we can center it
$box = imagettfbbox($size, 0, $font, $text);
$text_width = abs($box[2]) - abs($box[0]);
// $text_height = abs($box[5]) - abs($box[3]);
$image_width = imagesx($jpg_image);
// $image_height = imagesy($jpg_image);
$x = ($image_width - $text_width) / 2;
// $y = ($image_height + $text_height) / 2;

imagettftext($jpg_image, $size, 0, $x, 1800, $color, $font, $text);
imagejpeg($jpg_image, null, 100);
imagedestroy($jpg_image);