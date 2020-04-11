# class Deck

import dominion
import random

class Deck:
    def __init__(self):
        self._card_array = []
        pass

    def size(self):
        return len(self._card_array)

    def push(self, item):
        #only 'card' types can be pushed onto the deck
        if isinstance(item, dominion.Base_Card):
            self._card_array.append(item)
        else:
            raise Exception('non-card pushed onto deck')
        pass

    def pop(self):
        return self._card_array.pop()

    def peek(self,n):
        #returns a list of the top n cards where [0] is top of deck
        return self._card_array[-1:-1-n:-1]

    def shuffle(self):
        random.shuffle(self._card_array)

 
    

