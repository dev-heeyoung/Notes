package accounts

import (
	"errors"
	"fmt"
)

// Account struct
type Account struct {
	owner   string
	balance int
}

// Error variable
var errNoMoney = errors.New("can't withdraw")

// NewAccount creates Account (like a constructor)
func NewAccount(name string) *Account {
	account := Account{owner: name, balance: 0}
	return &account
}

// Deposit x amount on the account
func (a *Account) Deposit(amount int) {
	a.balance += amount
}

// Return balance of the account
func (a *Account) Balance() int {
	return a.balance
}

// Withdraw x amount from the account
func (a *Account) Withdraw(amount int) error {
	if a.balance < amount {
		return errNoMoney
	}
	a.balance -= amount
	return nil
}

// Return the owner
func (a *Account) Owner() string {
	return a.owner
}

// Change the owner name
func (a *Account) ChangeOwner(name string) {
	a.owner = name
}

// Change the default return string of the struct
func (a *Account) String() string {
	return fmt.Sprint(a.Owner(), "'s account.\nHas:", a.Balance())
}
