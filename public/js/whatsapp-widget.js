// WhatsApp Widget - Production Version with Responsive & Cookie Banner Support
function initWhatsAppWidget() {
  try {
    const btn = document.getElementById('whatsapp-btn');
    const form = document.getElementById('whatsapp-form');
    const closeBtn = document.getElementById('close-form');
    const contactForm = document.getElementById('whatsapp-contact-form');
    
    if (!btn || !form || !closeBtn || !contactForm) {
      setTimeout(initWhatsAppWidget, 200);
      return;
    }

    // Cookie banner detection and position adjustment
    function checkCookieBanner() {
      const cookieBanner = document.querySelector('.cc-banner, .cc-window');
      if (cookieBanner && cookieBanner.style.display !== 'none') {
        document.body.classList.add('cc-banner-active');
      } else {
        document.body.classList.remove('cc-banner-active');
      }
    }

    // Check cookie banner periodically
    const cookieCheckInterval = setInterval(checkCookieBanner, 500);
    
    // Stop checking after cookie banner is dismissed
    setTimeout(() => {
      if (cookieCheckInterval) {
        clearInterval(cookieCheckInterval);
      }
    }, 30000);
    
    // Global toggle function
    window.toggleWhatsApp = function() {
      try {
        if (form.style.display === 'none' || !form.style.display) {
          // Show form
          form.style.setProperty('display', 'block', 'important');
          form.style.setProperty('visibility', 'visible', 'important');
          form.style.setProperty('opacity', '1', 'important');
          form.style.setProperty('transform', 'translateX(0)', 'important');
          form.style.setProperty('position', 'absolute', 'important');
          
          form.classList.remove('hidden');
          form.classList.add('show');
        } else {
          // Hide form
          form.style.setProperty('display', 'none', 'important');
          form.style.setProperty('visibility', 'hidden', 'important');
          form.style.setProperty('opacity', '0', 'important');
          form.classList.add('hidden');
          form.classList.remove('show');
        }
      } catch(e) {
        console.error('WhatsApp widget error:', e);
      }
    };
    
    // Close button handler
    closeBtn.onclick = function(e) {
      e.preventDefault();
      form.style.setProperty('display', 'none', 'important');
      form.style.setProperty('visibility', 'hidden', 'important');
      form.style.setProperty('opacity', '0', 'important');
      form.classList.add('hidden');
      form.classList.remove('show');
    };

    // Close form when clicking outside (mobile-friendly)
    document.addEventListener('click', function(e) {
      if (form.style.display === 'block' || form.classList.contains('show')) {
        const widget = document.getElementById('whatsapp-widget');
        if (widget && !widget.contains(e.target)) {
          form.style.setProperty('display', 'none', 'important');
          form.style.setProperty('visibility', 'hidden', 'important');
          form.style.setProperty('opacity', '0', 'important');
          form.classList.add('hidden');
          form.classList.remove('show');
        }
      }
    });

    // Handle screen rotation and resize
    window.addEventListener('resize', function() {
      // Force reposition on mobile when rotating
      if (window.innerWidth <= 640) {
        checkCookieBanner();
      }
    });

    // Touch events for better mobile interaction
    btn.addEventListener('touchstart', function(e) {
      e.preventDefault();
      if (window.toggleWhatsApp) window.toggleWhatsApp();
    });
    
    // Form submission handler
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const service = formData.get('service');
      const name = formData.get('name');
      const phone = formData.get('phone') || '';
      const message = formData.get('message');
      
      if (!service || !name || !message) {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
        return;
      }
      
      // Professional German message templates
      const messageTemplates = {
        'Notfall-Reparatur': '🚨 NOTFALL - KFZ-Panne',
        'Inspektion-Wartung': '🔧 Anfrage für Inspektion/Wartung',
        'HU-AU-Vorbereitung': '✅ TÜV/HU-AU Terminanfrage',
        'Unfallgutachten': '📋 Gutachten-Anfrage nach Unfall',
        'Abschleppdienst': '🚛 Abschleppdienst benötigt',
        'Bremsen-Fahrwerk': '🛞 Bremsen/Fahrwerk Service',
        'Elektrik-Diagnose': '⚡ Elektrik-Diagnose Anfrage',
        'Autoglas-Service': '🪟 Autoglas Reparatur/Austausch',
        'Kostenvoranschlag': '💰 Kostenvoranschlag gewünscht',
        'Terminanfrage': '📅 Terminvereinbarung',
        'Allgemeine-Beratung': '💬 Beratungsanfrage'
      };

      // Get current time for greeting
      const now = new Date();
      const hour = now.getHours();
      let greeting = hour < 12 ? "Guten Morgen" : hour < 18 ? "Guten Tag" : "Guten Abend";

      // Create professional WhatsApp message
      let whatsappMessage = `${greeting} KFZ-Service Memmo Team! 👋\n\n`;
      
      const serviceTitle = messageTemplates[service] || `🔧 ${service}`;
      whatsappMessage += `*${serviceTitle}*\n`;
      whatsappMessage += `═══════════════════════\n\n`;
      
      whatsappMessage += `👤 *Kundendaten:*\n`;
      whatsappMessage += `• Name: ${name}\n`;
      if (phone) {
        whatsappMessage += `• Telefon: ${phone}\n`;
      }
      whatsappMessage += `• Service: ${service.replace('-', ' ')}\n\n`;
      
      whatsappMessage += `📝 *Beschreibung:*\n`;
      whatsappMessage += `"${message}"\n\n`;
      
      // Add service-specific information
      if (service === 'Notfall-Reparatur' || service === 'Abschleppdienst') {
        whatsappMessage += `🆘 *EILIG - Schnelle Hilfe benötigt!*\n`;
        whatsappMessage += `Bitte um zeitnahe Rückmeldung.\n\n`;
      } else if (service === 'Unfallgutachten') {
        whatsappMessage += `📋 *Gutachten-Service:*\n`;
        whatsappMessage += `Benötige unabhängiges Kfz-Gutachten.\n\n`;
      } else if (service === 'HU-AU-Vorbereitung') {
        whatsappMessage += `✅ *TÜV-Service:*\n`;
        whatsappMessage += `Möchte Fahrzeug für HU/AU vorbereiten lassen.\n\n`;
      } else {
        whatsappMessage += `🕐 *Verfügbarkeit:*\n`;
        whatsappMessage += `Bin flexibel für Terminabsprache.\n\n`;
      }
      
      whatsappMessage += `📞 *Kontakt-Wunsch:*\n`;
      whatsappMessage += `☑️ WhatsApp Antwort\n`;
      if (phone) {
        whatsappMessage += `☑️ Telefonischer Rückruf möglich\n`;
      }
      whatsappMessage += `☑️ Persönlicher Besuch in der Werkstatt\n\n`;
      
      whatsappMessage += `📍 *KFZ-Service Memmo*\n`;
      whatsappMessage += `[ADRESSE HIER EINTRAGEN]\n`;
      whatsappMessage += `📞 [TELEFON HIER EINTRAGEN]\n`;
      whatsappMessage += `🕐 Mo-Fr: 08:00-18:00 Uhr\n\n`;
      whatsappMessage += `Vielen Dank für Ihre Zeit! 🙏\n`;
      whatsappMessage += `Freue mich auf Ihre Antwort! 👨‍🔧`;

      // ⚠️ WICHTIG: WhatsApp-Nummer des Werkstatt hier eintragen!
      // Format: Ländercode + Nummer ohne Leerzeichen, Bindestriche oder +
      // Beispiel: +49 157 1234567 wird zu 491571234567
      const whatsappNumber = '491571234567'; // 👈 HIER ECHTE NUMMER EINTRAGEN!
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Show feedback
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '✅ WhatsApp wird geöffnet...';
        
        setTimeout(() => {
          submitBtn.innerHTML = '🚀 Erfolgreich gesendet!';
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            contactForm.reset();
            form.style.display = 'none';
          }, 2000);
        }, 1000);
      }
    };
    
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!form.contains(e.target) && !btn.contains(e.target)) {
        form.style.display = 'none';
      }
    });
    
  } catch(error) {
    console.error('WhatsApp widget error:', error);
    setTimeout(initWhatsAppWidget, 500);
  }
}

// Multiple initialization methods
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWhatsAppWidget);
} else {
  initWhatsAppWidget();
}

// Fallback initializations
setTimeout(initWhatsAppWidget, 100);
setTimeout(initWhatsAppWidget, 500);
setTimeout(initWhatsAppWidget, 1000);

// For Astro page transitions
document.addEventListener('astro:page-load', initWhatsAppWidget);
window.addEventListener('load', initWhatsAppWidget);
