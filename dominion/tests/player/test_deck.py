# class DeckTest

import dominion 
import pytest

class TestDeck:
    def _compare_card_arrays(self, cards, names):
        #Compares an array of cards against an array of names
        for i in range(len(cards)):
            print('compares...')
            print(names,cards)
            print(cards[i].name,names[i])
            if cards[i].name != names[i]: return False
        return True

    @pytest.fixture
    def office_deck(self):
        deck = dominion.Deck()
        deck.push(dominion.Base_Card('dwight'))
        deck.push(dominion.Base_Card('jim'))
        deck.push(dominion.Base_Card('michael'))
        return deck

    def test_peek(self, office_deck):
        deck = office_deck
        assert self._compare_card_arrays(
            deck.peek(1),
            ['michael'])
        assert self._compare_card_arrays(
            deck.peek(3),
            ['michael','jim','dwight'])
        assert self._compare_card_arrays(
            deck.peek(0),
            [])
        pass

    def test_push_pop(self):
        deck = dominion.Deck()
        #Test push functionality
        deck.push(dominion.Base_Card('first'))
        assert deck.size() == 1
        deck.push(dominion.Base_Card('last'))
        assert deck.size() == 2
        #Test pop functionality
        assert deck.pop().name == 'last'
        assert deck.size() == 1
        assert deck.pop().name == 'first'
        assert deck.size() == 0

    def test_shuffle(self, office_deck):
        #I don't think this needs a test

        pass
