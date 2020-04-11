# class DeckTest

import dominion 

class TestDeck:
    def _test_peek(self):
        pass

    def _test_push(self):
        deck = dominion.Deck()
        card = dominion.Base_Card('mike')
        assert card.say_name() == 'mike'

    def _test_pop(self):
        pass

    def _test_shuffle(self):
        pass

    def test_deck(self):
        self._test_push()
        pass