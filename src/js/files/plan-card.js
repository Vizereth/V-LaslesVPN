class PlanCard {
  constructor(className) {
    this.className = className;
    this.cards = document.querySelectorAll(`.${this.className}`);
    this.currentCard = null;
  }

  init() {
    this.cards.forEach((card) => {
      card.addEventListener("click", (e) => this.onClickHandler(e));
    });
  }

  onClickHandler(e) {
    const targetEl = e.target;

    if (this.currentCard) {
      this.deselectCard();
    }

    this.setCurrentCard(targetEl);
    this.selectCard();
  }

  setCurrentCard(card) {
    this.currentCard = card;
  }

  selectCard() {
    this.currentCard.classList.add(`${this.className}--active`);
  }

  deselectCard() {
    this.currentCard.classList.remove(`${this.className}--active`);
  }
}

const initPlanCards = (() => {
  const className = "plan-card";
  const planCard = new PlanCard(className);
  planCard.init();
})();
