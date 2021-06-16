# Basic example with Node.js and kafka

![CI](https://github.com/helio-frota/random-countries/workflows/ci/badge.svg)
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

Open a new terminal and create a topic:
```console
./bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --topic countries
```

## Running the Node.js example

### Using kafkajs

Open a new terminal and run:

```console
cd kafkajs-example
npm install
npm run producer
```