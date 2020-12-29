# Basic example with Node.js and kafka

### Download and start Apache Kafka:

```console
# download and extract:
mkdir kafka && cd kafka
wget https://downloads.apache.org/kafka/2.6.0/kafka_2.12-2.6.0.tgz
tar xf kafka**.tgz --strip 1

# start zookeeper:
./bin/zookeeper-server-start.sh config/zookeeper.properties
```

Open a new terminal and start kafka broker:
```console
./bin/kafka-server-start.sh config/server.properties
```

Create a new topic:
```console
./bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --topic countries
```

### Using docker compose instead

```console
docker-compose -f docker-compose.yml up
```

## Running the Node.js example:

### Using kafkajs

Open a new terminal and run the example:

```console
cd using-kafkajs
npm it
```

### Using the foo

```console
cd using-foo
npm it
```

