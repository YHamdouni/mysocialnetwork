package controllers

import (
	"encoding/json"
	"log"
	"net/http"

	"social-network/app/services"
	models "social-network/pkg/models"
	"social-network/pkg/utils"
)

func AcceptFollow(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		utils.JsonResponse(w, "Method not allowed", http.StatusMethodNotAllowed)
		log.Println("method not allowed")
		return
	}
	var AcceptcceptFollow models.AcceptcceptFollow
	err := json.NewDecoder(r.Body).Decode(&AcceptcceptFollow)
	if err != nil {
		utils.JsonResponse(w, err.Error(), http.StatusBadRequest)
		log.Println("error decoding json postRequest:", err)
		return
	}
	userID := r.Context().Value("userId").(int)
	if AcceptcceptFollow.Action == "Accept" {
		err := services.AcceptFollow(userID, AcceptcceptFollow.Follower)
		if err != nil {
			utils.JsonResponse(w, err.Error(), http.StatusInternalServerError)
			log.Println("error accepting follow:", err)
			return
		}
	} else if AcceptcceptFollow.Action == "Reject" {
		err := services.RejectFollow(userID, AcceptcceptFollow.Follower)
		if err != nil {
			utils.JsonResponse(w, err.Error(), http.StatusInternalServerError)
			log.Println("error rejecting follow:", err)
			return
		}
	}
	utils.JsonResponse(w, AcceptcceptFollow, http.StatusOK)
}
