"use strict";
// Edit this address before connecting the form to your business.
const businessEmail = 'hello@example.com';
const menu = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation?.classList.toggle('open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
}));
const service = document.querySelector('#service');
document.querySelectorAll('[data-service], [data-plan]').forEach(link => {
    link.addEventListener('click', () => {
        if (service)
            service.value = link.dataset.service ?? link.dataset.plan ?? 'Business strategy';
    });
});
document.querySelectorAll('[data-period]').forEach(button => {
    button.addEventListener('click', () => {
        const period = button.dataset.period;
        document.querySelectorAll('[data-period]').forEach(item => {
            const selected = item === button;
            item.classList.toggle('active', selected);
            item.setAttribute('aria-pressed', String(selected));
        });
        document.querySelectorAll('.price').forEach(price => {
            price.textContent = '$' + price.dataset[period];
        });
        document.querySelectorAll('.period').forEach(label => {
            label.textContent = (period === 'monthly' ? 'per month' : 'per project') + ' · USD sample price';
        });
    });
});
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const draft = document.querySelector('#draft');
form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity())
        return;
    const data = new FormData(form);
    const text = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\n${data.get('message')}`;
    if (draft)
        draft.value = text;
    const box = document.querySelector('#draft-box');
    if (box)
        box.hidden = false;
    const link = document.querySelector('#email-link');
    if (link)
        link.href = `mailto:${businessEmail}?subject=${encodeURIComponent('Business inquiry: ' + data.get('service'))}&body=${encodeURIComponent(text)}`;
    if (formStatus)
        formStatus.textContent = 'Draft ready. Open your email app or copy it below. Nothing has been sent.';
});
document.querySelector('#copy')?.addEventListener('click', async () => {
    if (!draft || !formStatus)
        return;
    try {
        await navigator.clipboard.writeText(draft.value);
        formStatus.textContent = 'Inquiry copied. Paste it into your preferred email app.';
    }
    catch {
        draft.focus();
        draft.select();
        formStatus.textContent = 'Select the highlighted draft and copy it with Ctrl+C (or Command+C).';
    }
});
const year = document.querySelector('#year');
if (year)
    year.textContent = String(new Date().getFullYear());
