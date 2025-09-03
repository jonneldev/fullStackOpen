def get_full_name(first_name: str, last_name: str):
  full_name = first_name.title() + " " + last_name.title()
  return full_name

print(get_full_name("John", "Doe"))

def get_name_with_age(name: str, age: int):
    name_with_age = name + " is this old: " + str(age)
    return name_with_age

def process_items(items: list[str]):
    for item in items:
        print(item.capitalize)


def process_items(items_t: tuple[int, int, str], items_s: set[bytes]):
    return items_t, items_s

class Person:
    def __init__(self, name: str):
        self.name = name

def get_person_name(one_person: Person):
    return one_person

