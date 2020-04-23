package repositories

import (
	"backend/libs/databases"

	"backend/src/structs"
)

// CategoryRepository used for wrapped service
type CategoryRepository struct {
	db databases.SqliteDatabase
}

// NewCategoryRepository mantul
func NewCategoryRepository(db databases.SqliteDatabase) CategoryRepository {
	return CategoryRepository{db}
}

// Upsert mantul
func (instance *CategoryRepository) Upsert(category structs.Category) (structs.Category, error) {
	query := `INSERT INTO categories (id, name)
              VALUES (:id, :name)
              ON CONFLICT (id) DO
              UPDATE SET
                id = :id,
                name = :name
              WHERE id = :id`

	conn := instance.db.GetConnection()
	_, err := conn.NamedExec(query, &category)
	if err != nil {
		return category, err
	}
	return category, nil
}

// GetAll mantul
func (instance *CategoryRepository) GetAll() ([]structs.Category, error) {
	query := `SELECT * FROM categories`

	var categories []structs.Category

	conn := instance.db.GetConnection()
	_, err := conn.NamedExec(query, &categories)
	if err != nil {
		return categories, err
	}
	return categories, nil
}

// Delete Category
func (instance *CategoryRepository) Delete(category structs.Category) (structs.Category, error) {
	query := `DELETE FROM categories WHERE id = :id`

	conn := instance.db.GetConnection()
	_, err := conn.NamedExec(query, &category)
	if err != nil {
		return category, err
	}
	return category, nil
}
