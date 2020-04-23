package rpc

import (
	"context"
	"log"

	"google.golang.org/grpc"

	pb "backend/proto"
	"backend/src/repositories"
	"backend/src/structs"

	"github.com/golang/protobuf/ptypes/empty"
)

// CategoryServer struct
type CategoryServer struct {
	repository repositories.CategoryRepository
}

// NewCategoryServer mantul
func NewCategoryServer(s *grpc.Server, repository repositories.CategoryRepository) *CategoryServer {
	server := &CategoryServer{repository}
	if s != nil {
		pb.RegisterCategoryServiceServer(s, server)
	}
	return server
}

// func (instance *AccountServer) AuthenticateByEmailAndPassword(ctx context.Context, req *pb.User) (*pb.Account, error) {
// 	user := structs.User{
// 		Email:    req.Email,
// 		Password: req.Password,
// 	}
// 	_, err := instance.repository.AuthenticateByEmailAndPassword(user)
// 	if err == nil {
// 		resp := &pb.Account{Token: "my-secret-token"}
// 		return resp, nil
// 	}
// 	return nil, fmt.Errorf("Invalid credentials. %s", err)
// }

// Create category
func (instance *CategoryServer) Create(ctx context.Context, req *pb.CategoryCreateRequest) (*pb.Category, error) {
	return instance.insert(ctx, req)
}

// Update Category
func (instance *CategoryServer) Update(ctx context.Context, req *pb.CategoryUpdateRequest) (*pb.Category, error) {
	return instance.update(ctx, req)
}

// GetAll Category
func (instance *CategoryServer) GetAll(ctx context.Context, void *empty.Empty) (*pb.GetAllResponse, error) {
	return instance.getAll(ctx)
}

// Delete Category
func (instance *CategoryServer) Delete(ctx context.Context, req *pb.CategoryDeleteRequest) (*empty.Empty, error) {
	return instance.delete(ctx, req)
}

// func (instance *AccountServer) ChangePassword(ctx context.Context, req *pb.User) (*pb.Nothing, error) {
// 	_, err := instance.upsert(ctx, req)
// 	return &pb.Nothing{}, err
// }

func (instance *CategoryServer) insert(ctx context.Context, req *pb.CategoryCreateRequest) (*pb.Category, error) {
	category := structs.Category{
		Name: req.Name,
	}
	_, err := instance.repository.Upsert(category)
	return &pb.Category{}, err
}

func (instance *CategoryServer) update(ctx context.Context, req *pb.CategoryUpdateRequest) (*pb.Category, error) {
	category := structs.Category{
		ID:   req.Id,
		Name: req.Name,
	}
	_, err := instance.repository.Upsert(category)
	return &pb.Category{
		Id:   category.ID,
		Name: category.Name,
	}, err
}

func (instance *CategoryServer) delete(ctx context.Context, req *pb.CategoryDeleteRequest) (*empty.Empty, error) {
	category := structs.Category{
		ID: req.Id,
	}
	_, err := instance.repository.Delete(category)
	if err != nil {
		log.Println("error")
	}
	return new(empty.Empty), nil
}

func (instance *CategoryServer) getAll(ctx context.Context) (*pb.GetAllResponse, error) {
	getCategories, err := instance.repository.GetAll()

	var categories []*pb.Category

	for _, val := range getCategories {
		category := pb.Category{
			Id:   val.ID,
			Name: val.Name,
		}

		categories = append(categories, &category)
	}

	log.Println(categories)

	if err != nil {
		log.Println("error")
	}
	return &pb.GetAllResponse{
		ListCategory: categories,
	}, nil
}
