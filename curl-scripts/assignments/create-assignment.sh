curl "http://localhost:4741/assignments" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "assignment": {
      "title": " Top Schools ",
      "description": " Student will make a list of top 5-7 schools including a range of safety and reach schools.",
      "status": "pending"
    }
  }'

  echo
