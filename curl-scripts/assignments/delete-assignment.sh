
curl "http://localhost:4741/assignments/${ID}" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE

echo
