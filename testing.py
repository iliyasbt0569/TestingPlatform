from enum import Enum
from typing import List
from random import shuffle
import re

class Difficulty(Enum):
    EZ = 0,
    MEDIUM = 1,
    HARD = 2,

class Test:
    def __init__(self, id, question, variants, rightvariant : str, difficulty : Difficulty) -> None:
        self.id = id
        self.question = question
        self.variants = variants
        shuffle(self.variants)
        self.rightvariant = rightvariant
        self.difficulty = difficulty
    
    def as_json(self):
        return {self.id : {
                    "question": self.question,
                    "variants": self.variants,
                    "rightvariant": self.rightvariant,
                    "difficulty": self.difficulty.name
                }
        }

class Testing:
    def __init__(self, name, tests : List[Test]) -> None:
        self.tests = tests
        self.name = name
    
    def as_json(self):
        dict = {}
        for test in self.tests:
            dict.update(test.as_json())
        return dict

    def print_test(self):
        for test in self.tests:
            print(f"ID-{test.id})Question : {test.question} --- Difficulty : {test.difficulty}")
            print(f"Right : {test.rightvariant}")
            print(', '.join(test.variants))
            print("\n\n\n")


def str_to_Testing(s : str, testing_name : str) -> Testing:
    tests = []
    difficulty = None
    for loop_index, test in enumerate(re.split("(<question\d>)", s)):
        match test:
            case "<question1>":
                difficulty = Difficulty.EZ
            case "<question2>":
                difficulty = Difficulty.MEDIUM
            case "<question3>":
                difficulty = Difficulty.HARD
            case _:
                test = test.replace("<variantright>", "<variant>")
                test = test.split("<variant>")
                if len(test) >= 3:
                    test = [i.strip() for i in test]
                    tests.append(
                        Test(
                            id = loop_index,
                            question = test[0], 
                            rightvariant = test[1], 
                            variants = test[1:], 
                            difficulty = difficulty,
                        )
                    )
    return Testing(tests=tests, name=testing_name)