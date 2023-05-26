console.log('Funguju')


const getEmail = (emails) => {
    if (!Array.isArray(emails)) {
      console.error('Invalid input: expected an array of emails');
      return;
    }
    const emailElm = document.querySelector('.inbox');
    const unreadEmails = emails.filter(email => email.unread);
    const readEmails = emails.filter(email => !email.unread);
    const unreadHtml = unreadEmails.map((email) => `
      <div class="email">
        <div class="email__head">
          <button class="email__icon email__icon--closed"></button>
          <div class="email__info">
            <div class="email__sender">${email.sender.name}</div>
            <div class="email__subject">${email.subject}</div>
          </div>
          <div class="email__time">${email.date}</div>
        </div>
        <div class="email__body"></div>
      </div>
    `).join('');
    const readHtml = readEmails.map((email) => `
      <div class="email">
        <div class="email__head">
          <button class="email__icon email__icon--opened"></button>
          <div class="email__info">
            <div class="email__sender">${email.sender.name}</div>
            <div class="email__subject">${email.subject}</div>
          </div>
          <div class="email__time">${email.date}</div>
        </div>
        <div class="email__body"></div>
      </div>
    `).join('');
    emailElm.innerHTML = `
      <h2>Unread emails</h2>
      ${unreadHtml}
      <h2>Read emails</h2>
      ${readHtml}
    `;
  };
  
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
    .then((response) => response.json())
    .then((data) => {
      getEmail(data.emails);
    });