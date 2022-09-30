import { GraphQLQuery, GraphQLSubscription } from "@aws-amplify/api";
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Divider, Grid, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useCallback, useEffect, useState } from 'react';
import { ModelSortDirection, OnCreateTsubuyakiSubscription, TimelineTsubuyakiQuery, TimelineTsubuyakiQueryVariables, Tsubuyaki } from '../../API';
import { timelineTsubuyaki } from '../../graphql/queries';
import { onCreateTsubuyaki } from '../../graphql/subscriptions';

function Home() {
    const [posts, setPosts] = useState<Tsubuyaki[]>([])
    const fetchTsubuyaki = useCallback(async () => {
        try {
            const queryVal: TimelineTsubuyakiQueryVariables = {
                year: '2022',
                sortDirection: ModelSortDirection.DESC
            }
            const postsData = (await API.graphql(
                graphqlOperation(timelineTsubuyaki, queryVal)
            )) as GraphQLResult<TimelineTsubuyakiQuery>

            const lPosts = postsData.data?.timelineTsubuyaki?.items as Tsubuyaki[]
            setPosts(lPosts)

        } catch (err) {
            console.log("error!!", err)
        }
    }, [])

    useEffect(() => {
        fetchTsubuyaki()
    }, [fetchTsubuyaki])

    useEffect(() => {
        const subscription = API.graphql<GraphQLSubscription<OnCreateTsubuyakiSubscription>>(
            graphqlOperation(onCreateTsubuyaki)
        ).subscribe({
            next: (msg) => {
                const newTsubuyaki = msg.value.data?.onCreateTsubuyaki as Tsubuyaki
                setPosts([newTsubuyaki, ...posts])
            }
        })
        return () => subscription.unsubscribe()
    }, [posts, setPosts])

    return (
        <Grid container>
            <Grid item xs={12}>
                <List>
                    {posts.map(post => (
                        <span>
                            <ListItem key={post.id}>
                                <ListItemAvatar>
                                    <Avatar>{post.owner![0]}</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={post.content}
                                    secondary={`${post.owner!} - ${post.created}`} />
                            </ListItem>
                            <Divider />
                        </span>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
}

export default Home;
