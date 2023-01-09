<!-- This component was created with the help of a YouTube tutorial.
https://youtu.be/B4KZYsyuVOE -->
<div class="footer">
    <footer>
        <div class="container">
            <div class="sec statement">
                <h1>Copyright Statement</h1>
                    <p>This website has been created as part of an assignment in 
                    an approved course of study for Curtin University and 
                    contains copyright material not created by the author. 
                    All copyright material used remains copyright of the 
                    respective owners and has been used here pursuant to Section
                    40 of the Copyright Act 1968 (Commonwealth of Australia). 
                    No part of this work may be reproduced without consent of 
                    the original copyright owners. See code comments for 
                    references.</p>
                    <ul class="sci">
                        <li>
                            <a href="https://www.facebook.com/curtinuniversity">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/CurtinUni">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/curtinuniversity/">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@curtinuniversity">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
            </div>
            <div class="sec quicklinks">
                <h1>Quick Links</h1>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/guide">Help</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
            <div class="sec contact">
                <h1>Contact Info</h1>
                <ul class="info">
                    <li>
                        <span>
                            <i class="fa-solid fa-location-dot"></i>
                        </span>
                        <span>7 Tabilk St, 3060<br/>
                        Fawkner, Melbourne, Victoria<br/>
                        Australia</span>
                    </li>
                    <li>
                        <span>
                            <i class="fa-solid fa-phone"></i>
                        </span>
                        <p><a href="tel:123456789">+1 234 567 8900</a></p>
                    </li>
                    <li>
                        <span>
                            <i class="fa-solid fa-envelope"></i>
                        </span>
                        <p><a href="mailto:mail@example.com">mail@example.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div class="copyright">
        <p>Copyright © 2023 The WebDevs. All rights reserved.</p>
    </div>
</div>

<style>
   .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    margin-left: -40px;
   }

   footer {
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
   }

   .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
   }

   .sec {
    margin-right: 30px;
   }

   .statement {
    width: 40%;
   }

   h1 {
    position: relative;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 15px;
   }

   h1:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: #EF6461;
   }

   p, li {
    font-size: 12px;
    margin-bottom: 10px;
   }

   .sci {
    margin-top: 20px;
    display: flex;
   }

    li {
    list-style: none;
   }

   li a {
    color: #313638;
    text-decoration: none;
   }

   li a:hover {
    color: #EF6461;
   }

   .sci li a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #E8E9EB;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
   }

   .sci li a:hover {
    background: #EF6461;
   }

   .sci li a i {
    color: #313638;
    font-size: 25px;
   }
   .sci li a:hover i {
    color: #E8E9EB;
   }

   .quicklinks{
    position: relative;
    width: 25%;
   }

   .contact {
    width: calc(35% - 60px);
    margin-right: 0 !important;
   }

   .info {
    position: relative;
   }

   .info li {
    display: flex;
    margin-bottom: 16px;
   }

   .info i {
    font-size: 20px;
    margin-right: 10px;
   }

   .copyright {
    width: 100%;
    background: #E8E9EB;
    padding: 8px 100px;
    text-align: center;
   }

   @media (max-width: 991px) {
    footer {
        padding: 40px;
    }

    .container {
        flex-direction: column;
    }

    .sec {
        margin-right: 0;
        margin-bottom: 40px;
    }

    .statement, .quicklinks, .contact {
    width: 100%;
   }

   .copyright {
    padding: 8px 40px;
   }
  }
</style>