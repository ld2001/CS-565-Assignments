interface Guest {
    coming: boolean,
    name: string
}

const guests: Guest[] = [
  {
    coming: true,
    name: `Sir Isaac Newton`
  },
  {
    coming: true,
    name: `Marie Curie`
  },
  {
    coming: true,
    name: `Albert Einstein`
  },
  {
    coming: false,
    name: `Charles Darwin`
  }];

  export class Codelab {
    constructor(public guests: Guest[]) {
    }
  
    getGuestsComing() {
      return this.guests.filter(guest => guest.coming);
    }
  }

const codelab = new Codelab(guests);

document.body.innerHTML = '<ul>' +
  codelab.getGuestsComing().map((guest: Guest) => `<li>${guest.name}</li>`).join('') +
  '</ul>';
