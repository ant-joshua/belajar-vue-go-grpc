package structs

type User struct {
	Email    string `db:"email" json:"email"`
	Password string `db:"password" json:"password"`
}

type Category struct {
	ID   int64  `db:"id" json:"id"`
	Name string `db:"name" json:"name"`
}
