---
layout: default
title: Contact Me
permalink: /contact/
---

<section id="contact-full" class="section-padding container">
    <h2 class="section-title">📧 Let's Connect!</h2>
    <p class="text-center" style="margin-bottom: 50px;">I'm currently open to new opportunities and collaborations. Send me a message, and I'll get back to you as soon as possible.</p>

    <form class="contact-form glassmorphism slide-up" action="YOUR_FORMSPREE_OR_NETLIFY_URL" method="POST" style="padding: 40px;">
        <div class="form-group">
            <input type="text" name="name" placeholder="Your Name" required class="3d-input-field">
        </div>
        <div class="form-group">
            <input type="email" name="_replyto" placeholder="Your Email" required class="3d-input-field">
        </div>
        <div class="form-group">
            <textarea name="message" placeholder="Your Message" required class="3d-input-field"></textarea>
        </div>
        <button type="submit" class="cta-primary-3d">Send Message</button>
    </form>
    
    <div class="text-center" style="margin-top: 40px;">
        <h3>Or find me here:</h3>
        <div class="social-links-footer" style="margin-top: 20px;">
             <a href="{{ site.linkedin_url }}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
             <a href="{{ site.github_url }}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
             <a href="{{ site.twitter_url }}" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        </div>
        <p style="margin-top: 20px;">Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    </div>

</section>
