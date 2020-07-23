import React, { useState } from "react"
import styled from "styled-components"
import { Github, LinkedinSquare, Twitter } from "@styled-icons/boxicons-logos"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"

import Layout from "@components/Layout"
import Module from "@components/Module"
import useAbout from "@utils/useAbout"
import useModules from "@utils/useModules"

const colors = ["#b5838d", "#6d6875", "#6930c3", "#457b9d"]

export default function IndexPage() {
  const [selectedModule, setSelectedModule] = useState(null)

  const modules = useModules()
  const about = useAbout()
  return (
    <Layout>
      <AnimatePresence>
        {selectedModule && (
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <About>
        <AboutContent dangerouslySetInnerHTML={{ __html: about.html }} />
        <Socials>
          <li>
            <Github size="32" />
          </li>
          <li>
            <LinkedinSquare size="32" />
          </li>
          <li>
            <Twitter size="32" />
          </li>
        </Socials>
      </About>
      <AnimateSharedLayout type="crossfade">
        <Modules>
          {modules.map((module, index) => (
            <motion.div
              layoutId={module.id}
              onClick={() => setSelectedModule(module)}
            >
              <ModuleWithIndex color={colors[index]} module={module} />
            </motion.div>
          ))}
        </Modules>
        <AnimatePresence>
          {selectedModule && (
            <Modal layoutId={selectedModule.id}>
              <button onClick={() => setSelectedModule(null)}>X</button>
              <Module color={colors[1]} module={selectedModule} />
            </Modal>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  )
}

const About = styled.section`
  grid-column: 1 / span 2;
  grid-row: 1;
`

const AboutContent = styled.article`
  > * {
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    font-size: 2em;
  }
`

const Modal = styled(motion.div)`
  grid-column: 3 / span 4;
  grid-row: 1;
  z-index: 20;
`

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  z-index: 10;
`

const Modules = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column: span 4 / -1;
  grid-gap: 1em;
  grid-row: 1;
`

const ModuleWithIndex = styled(Module)`
  z-index: 5;
`

const Socials = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 32px;

  > * {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`
