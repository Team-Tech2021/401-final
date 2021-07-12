import Link from 'next/link'

function ProblemsList({ problems }) {
    return (<ul>
        {problems.map(problem => (
            <ProblemItem key={problem.id} problem={problem} />
        // <li>
        //     <h1>
        //     {problem.title}

        //     </h1>
        //     <p>
        //     {problem.description}

        //     </p>
        //     <p>
        //     {problem.starter}
        //     </p>
                    
        // </li>
        ))}
    </ul>
    )
}

function ProblemItem({ problem }) {
    return (
        <li>
            <Link href="/problem/[id].js" as={`/problem/${problem.id}`}>
                <a>
                    {problem.title}
                </a>
            </Link>
        </li>
    )
}

export default ProblemsList;
