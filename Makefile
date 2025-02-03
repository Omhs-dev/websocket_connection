all:
	docker compose up --build
	@echo "$(ORG) Project is running at http://localhost:8080 $(RESET)"

down:
	docker compose down
	@echo "$(RED) Project is down $(RESET)"

reload: down all

clean:
	docker compose down --volumes
	@echo "$(RED) Project is down and volumes are removed $(RESET)"

fclean: clean
	docker rmi -f $(shell docker images -q)
	@echo "$(RED) All images are removed $(RESET)"

re: fclean all

BLUE    = \033[38;5;4m
GREEN   = \033[38;5;2m
ORG     = \033[38;5;214m
RED     = \033[38;5;196m
RESET   = \033[0m
CYAN	= \033[38;5;44m
MAGENTA	= \033[38;5;5m