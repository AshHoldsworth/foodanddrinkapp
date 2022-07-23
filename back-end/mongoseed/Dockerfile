FROM mongo

COPY food.json /food.json
CMD mongoimport \
    --host mongodb \
    --db foodanddrinkapp \
    --collection food \
    --type json \
    --file /food.json \
    --jsonArray

# COPY drink.json /drink.json
# CMD mongoimport \
#     --host mongodb \
#     --db foodanddrinkapp \
#     --collection drink \
#     --type json \
#     --file /drink.json \
#     --jsonArray

