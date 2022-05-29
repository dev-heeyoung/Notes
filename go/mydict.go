package mydict

import "errors"

type Dictionary map[string]string

var (
	errNotFound   = errors.New("Not Found")
	errWordExists = errors.New("The word already exsist")
	errCantUpdate = errors.New("Cannot update")
)

func (d Dictionary) Search(word string) (string, error) {
	value, exist := d[word]
	if exist {
		return value, nil
	}
	return "", errNotFound
}

func (d Dictionary) Add(key, value string) error {
	_, err := d.Search(key)
	switch err {
	case errNotFound:
		d[key] = value
	case nil:
		return errWordExists
	}
	return nil
}

func (d Dictionary) Update(key, value string) error {
	_, err := d.Search(key)
	switch err {
	case errNotFound:
		return errCantUpdate
	case nil:
		d[key] = value
	}
	return nil
}

func (d Dictionary) Delete(word string) {
	delete(d, word)
}
