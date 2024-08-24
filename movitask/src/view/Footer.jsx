import React from 'react'

export default function Footer() {
  return (
    <>
    <footer class="footer">
    <div class="footer-content">
        <div class="footer-section about">
            <h3>About MovieApp</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio, nulla esse expedita harum iure ad ipsam repellendus similique cum porro reiciendis recusandae. At aliquam aspernatur quam, quasi quod quas.</p>
        </div>
        <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-section social">
            <h3>Follow Us</h3>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 MovieApp. All rights reserved.</p>
    </div>
</footer>

    </>
  )
}
