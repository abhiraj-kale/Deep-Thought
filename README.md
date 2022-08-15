
## API Reference

#### Base url

```http
  /api/v3/app
  
```
Please use the base url before any API call
#### Create an event

```http
  POST /events
```

#### Returns: 
````
id of the event created
````
| Payload | Type     | Description                |
| :-------- | :------- | :------------------------- |
|type|string|The reason for the API. In this case "event"|
|uid|int|The user id
|name|string|Name of the event
|tagline|string|A proper tag-line for the event|
|schedule|DateTime|(Date + time) Timestamp|
|description|string|The description of the event|
|files[image]|Base64|Image file (File upload)|
|moderator|string|A user who is going to host|
|category|string|Category of the event|
|sub_category|string|Sub category|
|rigor_rank|int|Integer value|
|attendees|string[]|Array of user Id's who is attending the event|	

#### Create an event with a user given id

```http
  PUT /events/:id
```

#### Returns: 
````
id of the event created
````
| Params |Description|                
| :-------- | :------- | 
|`id`|**Required**. The id with which event is to be created|

| Payload | Type     | Description                |
| :-------- | :------- | :------------------------- |
|type|string|The reason for the API. In this case "event"|
|uid|int|The user id
|name|string|Name of the event
|tagline|string|A proper tag-line for the event|
|schedule|DateTime|(Date + time) Timestamp|
|description|string|The description of the event|
|files[image]|Base64|Image file (File upload)|
|moderator|string|A user who is going to host|
|category|string|Category of the event|
|sub_category|string|Sub category|
|rigor_rank|int|Integer value|
|attendees|string[]|Array of user Id's who is attending the event|	

#### Get an event with unique ID

```http
  GET /events
```

| Query Data   | Description                       |
|:------- | :-------------------------------- |
| `id`      | **Required**. Id of event to fetch |

#### Returns

| JSON  | Type     | Description                |
| :-------- | :------- | :------------------------- |
|type|string|The reason for the API. In this case "event"|
|uid|int|The user id
|name|string|Name of the event
|tagline|string|A proper tag-line for the event|
|schedule|DateTime|(Date + time) Timestamp|
|description|string|The description of the event|
|files[image]|Base64|Image file (File upload)|
|moderator|string|A user who is going to host|
|category|string|Category of the event|
|sub_category|string|Sub category|
|rigor_rank|int|Integer value|
|attendees|string[]|Array of user Id's who is attending the event|

#### Get limited latest events with unique ID

```http
  GET /events
```
| Query Data | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      |int| **Required**. Id of event to fetch |
| type      |string| type of event to fetch |
| limit     |int| No of latest doc to fetch |
| page     |int| No of pages of doc to fetch |

#### Returns

| JSON  | Type     | Description                |
| :-------- | :------- | :------------------------- |
|type|string|The reason for the API. In this case "event"|
|uid|int|The user id
|name|string|Name of the event
|tagline|string|A proper tag-line for the event|
|schedule|DateTime|(Date + time) Timestamp|
|description|string|The description of the event|
|files[image]|Base64|Image file (File upload)|
|moderator|string|A user who is going to host|
|category|string|Category of the event|
|sub_category|string|Sub category|
|rigor_rank|int|Integer value|
|attendees|string[]|Array of user Id's who is attending the event|


#### Delete an event with unique ID

```http
  DELETE /events/:id
```
#### Returns
````
Status 200
````
| Parameter   | Description                       |
|:------- | :-------------------------------- |
| `id`      | **Required**. Id of event to delete |
